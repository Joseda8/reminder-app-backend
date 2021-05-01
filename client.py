import requests
import time

start_time = time.time()
r = requests.get("http://localhost:5000/pokemon")
end_time = time.time()

print(f"El tiempo de ejecución es de: {end_time-start_time} [s]")
print(f"El estado de la respuesta es: {r.status_code}")
