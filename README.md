# 🌿 celva.dev — Portfolio Profesional

Portfolio personal desarrollado para mostrar proyectos, servicios y experiencia en **desarrollo web**, **diseño UX/UI**, **creative coding**, **videojuegos** y **análisis de datos**.

Construido con tecnologías modernas, enfocado en **claridad**, **performance** y **escalabilidad**.

🔗 **Live demo:** https://celvadev.netlify.app/  
📦 **Deploy:** Netlify  
🛠️ **Stack principal:** Astro · HTML · CSS · JavaScript

---

## ✨ Características principales

- ⚡ **Astro** como framework principal (Static Site Generation)
- 🧩 Arquitectura basada en componentes
- 🗂️ Contenido dinámico desde archivos JSON
- 🔍 Filtros por tags (proyectos y servicios)
- 📱 Diseño responsive (mobile-first)
- 🎨 Estética moderna y limpia
- 🚀 Performance optimizada (carga ultra rápida)
- 🌐 SEO-ready

---

## 🧠 Secciones del sitio

### 🏠 Home
- Hero section con identidad visual
- Accesos directos a **Proyectos** y **Servicios**

### 🧪 Proyectos
- Cards con información resumida
- Página individual por proyecto (`/projects/[slug]`)
- Documentación, tecnologías, links e imágenes

### 🛠️ Servicios
- Desarrollo Frontend / Backend / Full Stack
- Diseño UX/UI
- Data analysis & modelos predictivos
- Videojuegos y creative coding

### 📬 Contacto
- Información de contacto profesional
- Enlaces a redes y plataformas

---

## 🧱 Estructura del proyecto

```txt
src/
├── components/        # Componentes reutilizables (Navbar, Footer, Cards)
├── layouts/           # Layout principal
├── pages/             # Páginas y rutas
│   ├── index.astro
│   ├── projects/
│   ├── services/
│   └── contact.astro
├── data/              # Datos en JSON (proyectos, servicios)
├── styles/            # Estilos globales y por sección
└── assets/            # Imágenes y recursos
```

## 📄 Gestión de contenido

Los proyectos y servicios se gestionan desde archivos JSON:

```
src/data/projects.json

src/data/servicios.json
```

Esto permite:

Fácil mantenimiento

Escalabilidad

Separación clara entre contenido y UI

## 🚀 Instalación y uso local
Requisitos
```
Node.js >= 20
npm
```

Pasos
```
git clone https://github.com/tuusuario/astro-portafolio.git
cd astro-portafolio
npm install
npm run dev
```


Luego abre:
```
http://localhost:4321
```

## 🏗️ Build para producción
```
npm run build
```


El sitio generado quedará en:
```
/dist
```


## 🌍 Deploy

El proyecto está desplegado en Netlify con integración continua desde GitHub.

Cada push a main genera automáticamente un nuevo deploy.


## 👤 Autor

Pablo Lambert
Frontend · Full Stack · UX/UI · Creative Code · Data

🌐 https://celvadev.netlify.app/

💼 LinkedIn: https://linkedin.com/in/pablolambert

🐙 GitHub: https://github.com/pablocelva