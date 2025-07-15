# SectionLayout Component

Un componente reutilizable que combina navegación de secciones con layout de contenido para páginas con múltiples secciones.

## Características

- ✅ Navegación automática entre secciones
- ✅ Detección automática de sección activa con Intersection Observer
- ✅ Soporte para subsecciones
- ✅ Layout responsivo
- ✅ Totalmente configurable
- ✅ Scroll suave entre secciones
- ✅ Diseño sticky para el navegador

## Uso Básico

```tsx
import { SectionLayout } from "@/components/shared/section-layout";

const MyPage = () => {
  const sections = [
    {
      id: "section-1",
      title: "Primera Sección",
      subsections: [
        { id: "subsection-1", title: "Subsección A" },
        { id: "subsection-2", title: "Subsección B" },
      ],
    },
    {
      id: "section-2", 
      title: "Segunda Sección",
    },
  ];

  return (
    <SectionLayout sections={sections}>
      <section id="section-1">
        <h2>Primera Sección</h2>
        <div id="subsection-1">
          <h3>Subsección A</h3>
        </div>
        <div id="subsection-2">
          <h3>Subsección B</h3>
        </div>
      </section>
      
      <section id="section-2">
        <h2>Segunda Sección</h2>
      </section>
    </SectionLayout>
  );
};
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `sections` | `Section[]` | - | **Requerido**. Array de secciones para navegar |
| `children` | `ReactNode` | - | **Requerido**. Contenido de las secciones |
| `navigationTitle` | `string` | `"Navegación"` | Título del navegador |
| `navigationSubtitle` | `string` | - | Subtítulo opcional del navegador |
| `className` | `string` | `""` | Clases CSS para el contenedor principal |
| `contentClassName` | `string` | `""` | Clases CSS para el área de contenido |
| `navigatorClassName` | `string` | `""` | Clases CSS para el navegador |

## Interfaz Section

```tsx
interface Section {
  id: string;           // ID único que debe coincidir con el id del elemento HTML
  title: string;        // Título mostrado en el navegador
  subsections?: {       // Subsecciones opcionales
    id: string;         // ID único de la subsección
    title: string;      // Título de la subsección
  }[];
}
```

## Ejemplos Avanzados

### Con configuración personalizada

```tsx
<SectionLayout 
  sections={sections}
  navigationTitle="Guía de Contenido"
  navigationSubtitle="Navega por los temas"
  className="max-w-6xl mx-auto"
  contentClassName="space-y-12"
  navigatorClassName="lg:block hidden"
>
  {/* Contenido */}
</SectionLayout>
```

### Para pantallas móviles

```tsx
<SectionLayout 
  sections={sections}
  navigatorClassName="lg:block hidden" // Ocultar en móviles
  contentClassName="px-4"
>
  {/* Contenido responsivo */}
</SectionLayout>
```

## Mejores Prácticas

1. **IDs únicos**: Asegúrate de que los IDs en las secciones coincidan exactamente con los IDs en el HTML
2. **Estructura HTML**: Usa elementos `<section>` con IDs para las secciones principales
3. **Subsecciones**: Usa `<div>` con IDs para las subsecciones dentro de las secciones
4. **Espaciado**: Añade padding suficiente a las secciones para mejor UX
5. **Responsividad**: Considera ocultar el navegador en pantallas pequeñas

## Notas Técnicas

- Usa `IntersectionObserver` para detectar la sección activa
- El navegador tiene posición `sticky` con `top-40`
- Incluye un delay de 1 segundo antes de mostrarse
- El scroll suave considera un offset de 100px para headers fijos 