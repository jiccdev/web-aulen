export const navigationData = [
  {
    id: 1,
    name: 'Inicio',
    url: '/',
  },
  {
    id: 2,
    name: 'Soy Propietario',
    submenu: [
      {
        id: 1,
        name: 'Quiero Vender',
        url: '/soy-propietario/quiero-vender',
      },
      {
        id: 2,
        name: 'Quiero Arrendar',
        url: '/soy-propietario/quiero-arrendar',
      },
    ],
  },
  {
    id: 3,
    name: 'Administración de arriendo',
    url: '/administracion-de-arriendo',
  },
  {
    id: 4,
    name: 'Soy Inversionista',
    submenu: [
      {
        id: 1,
        name: 'Unidades en remate',
        url: '/soy-inversionista/unidades-en-remate',
      },
      {
        id: 2,
        name: 'Unidades nuevas',
        url: '/soy-inversionista/unidades-nuevas',
      },
    ],
  },
  {
    id: 5,
    name: 'Propiedades',
    url: '/propiedades',
  },
  {
    id: 7,
    name: 'Intranet',
    url: 'http://190.114.255.247:195/',
  },
  {
    id: 8,
    name: 'Contacto',
    url: '/contacto',
  },
];
