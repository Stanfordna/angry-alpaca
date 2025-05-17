#!/bin/bash
if [ "$1" = "--non-interactive" ] || [ "$1" = "-y" ] || \
   ask "Did you make sure your DNS 'A' record for nicholasstanford.dev points to `curl ifconfig.me 2>/dev/null`?" && \
   ask "Did you forward port 80 on your router to $ALPACA_IP_ADDR:80? If not, go do it!"
then
    certbot certonly -v \
    --force-renewal \
    --non-interactive \
    --standalone \
    --agree-tos \
    --email stanfordnas@gmail.com \
    --domains nicholasstanford.dev \
    || exit 1
fi

[ ! -d $ANGRY_ALPACA_HOME/ssl ] && mkdir $ANGRY_ALPACA_HOME/ssl
cat /c/Certbot/live/nicholasstanford.dev/fullchain.pem > $ANGRY_ALPACA_HOME/ssl/angry-alpaca.crt.pem
cat /c/Certbot/live/nicholasstanford.dev/privkey.pem > $ANGRY_ALPACA_HOME/ssl/angry-alpaca.key.pem

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
