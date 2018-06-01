    function localtunnel {
      lt -s qmailer-81151hyfpi9 --port 5000
      #lt --port 5000 --subdomain qmailer81151hyfpi9
    }
    until localtunnel; do
    echo "localtunnel server crashed"
    sleep 2
    done