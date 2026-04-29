FROM nginx:alpine

# Remove default nginx page (optional but clean)
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80