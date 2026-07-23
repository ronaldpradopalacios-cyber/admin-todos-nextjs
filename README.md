# Development

Pasos para levantar la app en desarrollo

1. Levantar la BD para desarrollo

```
docker compose up -d
```

2. Crear una copia del archivo "env.template", y renombrarlo como ".env"

3. Reemplazar las variables de entorno

4. Ejecutar el comando:

```
npm install
```

5. Ejecutar el comando

```
npm run dev
```

6. Ejecutar los siguientes comandos de prisma:

```
npx prisma migrate dev

npx prisma generate
```

7. Ejecutar el SEED para [crear la BD local](localhost:3000/api/seed)

---

---

# Prisma commands

```
npx prisma init

npx prisma migrate dev

npx prisma generate
```
