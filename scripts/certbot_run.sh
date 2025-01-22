#!/bin/bash
if ask "Did you remember to forward port 80 on your router to `curl ifconfig.me 2>/dev/null`:80? If not, go do it!"
then
    certbot certonly \
    --non-interactive \
    --standalone \
    --agree-tos \
    --email stanfordnas@gmail.com \
    --domains nicholasstanford.dev
    || exit 1

    # try with a container if above is successful?
    # docker run -it --rm --name certbot \
    #     -v "/etc/letsencrypt:/etc/letsencrypt" \
    #     -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
    #     -p 80:80 \
    #     docker.io/certbot/certbot \
    #     certonly \
    # --non-interactive \
    # --standalone \
    # --agree-tos \
    # --email stanfordnas@gmail.com \
    # --domains nicholasstanford.dev

    # TODO: Move certs to ssl directory and print expiration in a file or figure out command to easily detect if expired
fi
