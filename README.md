# Carpintería Metálica Juan Gamero

Proyecto base de la nueva web de **Carpintería Metálica Juan Gamero**.

**Estado:** inicio desde cero. La página está intencionadamente vacía: aún no hay hero, servicios, galería ni contacto.

## Tecnología

- Astro, generación estática.
- GitHub Actions para compilar y publicar en GitHub Pages.
- HTML, CSS y JavaScript cuando cada sección lo necesite.
- Node.js 22 para desarrollo y compilación.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
  components/        Componentes que iremos diseñando
  layouts/
    BaseLayout.astro  Documento HTML y metadatos base
  pages/
    index.astro       Página vacía de inicio
  styles/
    global.css        Reset mínimo
public/               Recursos estáticos futuros
```

## Despliegue de pruebas

La rama `main` se compila y publica automáticamente mediante `.github/workflows/deploy.yml`.

URL: https://juanjogamero.github.io/juan-gamero-web/

En GitHub Pages se utiliza `noindex` para evitar que Google indexe la web en desarrollo. Cuando se publique en el dominio definitivo, se activará la configuración de producción y se revisarán antes los textos, imágenes, contacto y SEO local.

## Negocio y alcance

Actividad: carpintería metálica de hierro, forja, rejas, puertas, barandas, tejados, cubiertas, estructuras, cerramientos, soldadura y reparaciones; instalación y motorización de puertas automáticas como servicio secundario en colaboración.

Base en Casariche. Cobertura en pueblos cercanos como Herrera, Estepa, Pedrera, La Roda de Andalucía, Puente Genil y Osuna. No publicar dirección del taller ni datos inventados. La galería mostrará proyectos reales cuando se disponga de sus fotografías.

**Criterio de diseño:** las nuevas secciones se desarrollarán a partir de referencias aportadas, respetando su composición y coherencia visual, con adaptación móvil y accesibilidad.
