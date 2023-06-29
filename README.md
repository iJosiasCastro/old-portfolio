# Porfolio

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Production

### PM2 Usage
npm install pm2@latest -g
pm2 start npm --name $app-name -- run start
pm2 save
pm2 ls  
pm2 delete