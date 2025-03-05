# Use uma imagem base leve com Nginx
FROM nginx:alpine

# Copie os arquivos do site para o diretório do Nginx
COPY public /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]