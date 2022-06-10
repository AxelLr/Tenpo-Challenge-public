# Tenpo-Challenge

Desafio front - React native Tenpo.

## Aclaracion

Agregar archivo .env en root del proyecto, con variable de entorno:
GOOGLE_MAPS_API_KEY= GOOGLE_MAPS_API_KEY VALIDA.

Probar en Android, no se contemplo IOS en el desarrollo.

- En /android/app/src/main/AndroidManifest.xml agregar

```bash

  <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="APY_KEY_VALIDA"/>
```

## Instalación y uso

```bash
yarn install

yarn start

yarn android
```
