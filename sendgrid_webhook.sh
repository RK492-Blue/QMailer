    function localtunnel {
      lt -s calmrefuge81151hyfpi9 --port 5000
    }
    until localtunnel; do
    echo "localtunnel server crashed"
    sleep 2
    done