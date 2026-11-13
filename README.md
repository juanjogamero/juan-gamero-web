# Carpintería Metálica Juan Gamero

Web estática de **metalicasgamero.es**, construida con Astro. Trabajo por secciones, optimizada para móvil, SEO local y carga rápida.

## Estado

Versión de desarrollo: solo portada / hero. El teléfono, WhatsApp y las imágenes de trabajos reales están pendientes. Las imágenes visibles son **referencias de banco de imágenes**, no trabajos del taller.

## Desarrollo local

Requiere Node 22 o superior.

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Publicación en GitHub Pages

1. Aprueba e integra esta rama en `main` mediante su Pull Request.
2. Abre **Settings > Pages > Build and deployment > Source: GitHub Actions**.
3. El flujo `.github/workflows/deploy.yml` ejecuta `npm ci`, construye Astro y despliega cada cambio en `main`.
4. URL prevista: `https://juanjogamero.github.io/juan-gamero-web/` **cuando el despliegue se haya completado**.

En GitHub Pages el proyecto lleva `noindex` para no indexar pruebas. El sitio definitivo pasará a `https://metalicasgamero.es/` cuando los contenidos, fotos, contactos y dominio estén listos.

## Trasladar al dominio definitivo

En la plataforma de publicación definitiva configura las variables `DEPLOY_TARGET=production` y `PUBLIC_SITE_STAGE=production`; Astro generará URLs para `metalicasgamero.es`, sin prefijo de repositorio. Configurar también DNS y los datos de contacto verificados. No apuntar el dominio durante el desarrollo.

## Arquitectura

- `src/pages/index.astro`: página de inicio.
- `src/components/Hero.astro`: portada con carrusel accesible.
- `src/layouts/BaseLayout.astro`: etiquetas SEO y estructura común.
- `src/styles/global.css`: estilo visual compartido.
- `astro.config.mjs`: URLs para GitHub Pages o dominio definitivo.
- `.github/workflows/deploy.yml`: validación de PR y publicación de main.

**Criterio editorial:** Casariche y pueblos cercanos, sin dirección exacta del taller. No inventar reseñas, obras o teléfonos. Prioridad a rejas, puertas, barandas, chapa, estructuras y reparaciones. Puertas automáticas secundarias.
