import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NUXT_PUBLIC_SUPABASE_URL!,
  process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ContentBlock {
  id: string;
  page: string;
  identifier: string;
  content: any;
}

interface Image {
  id: string;
  url: string;
  alt: string;
}

export const useCmsStore = defineStore('cms', {
  state: () => ({
    contentBlocks: {} as Record<string, Record<string, ContentBlock>>,
    images: [] as Image[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchContentBlocks(page: string) {
      try {
        this.loading = true;
        const { data, error } = await supabase
          .from('content_blocks')
          .select('*')
          .eq('page', page);

        if (error) throw error;

        this.contentBlocks[page] = data.reduce((acc, block) => {
          acc[block.identifier] = block;
          return acc;
        }, {});
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async updateContentBlock(page: string, identifier: string, content: any) {
      try {
        this.loading = true;
        const { data, error } = await supabase
          .from('content_blocks')
          .upsert({
            page,
            identifier,
            content,
            updated_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (error) throw error;

        if (!this.contentBlocks[page]) {
          this.contentBlocks[page] = {};
        }
        this.contentBlocks[page][identifier] = data;
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchImages() {
      try {
        this.loading = true;
        const { data, error } = await supabase
          .from('images')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        this.images = data;
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async uploadImage(file: File) {
      try {
        this.loading = true;
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `images/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('public')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('public')
          .getPublicUrl(filePath);

        const { data, error } = await supabase
          .from('images')
          .insert({
            url: publicUrl,
            alt: file.name,
          })
          .select()
          .single();

        if (error) throw error;
        this.images.unshift(data);
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
});