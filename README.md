# Homework Pokemon CRUD

[Ödev Gereksinimleri ve Açıklamaları (PDF)](./Ödev%202%20(ODEV).pdf)

Bu proje, Pokemonların listelendiği ve yönetildiği (CRUD işlemleri) basit bir React uygulamasıdır. Vite, TypeScript ve JSON Server kullanılarak geliştirilmiştir.

## Kullanılan Teknolojiler

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [JSON Server](https://github.com/typicode/json-server)

## Projeyi Çalıştırma

Projeyi yerel ortamınızda kurup çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Proje dizinine gidin ve bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlatın (Hem frontend hem de JSON Server aynı anda çalışacaktır):
   ```bash
   npm run dev
   ```

3. Tarayıcınızda uygulamanın çalıştığı adresi (genellikle `http://localhost:5173`) açarak projeyi görüntüleyebilirsiniz.

## Build Alma

Üretim (production) ortamı için projeyi derlemek isterseniz aşağıdaki komutu kullanabilirsiniz:

```bash
npm run build
```

Bu komut, `/dist` klasörü içerisine optimize edilmiş statik dosyaları oluşturacaktır.
