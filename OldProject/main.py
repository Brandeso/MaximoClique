# Implementacion del algoritmo recursivo de la busqueda del maximo clique
# Declaramos los nodos y el maximo
MAX = 0
nodos = 0

# Obtenemos los datos desde el txt
with open("nodos.txt", "r") as f:
	edges=[[int((num)) for num in line.split(',')] for line in f]
 
size = len(edges)

for i in range(len(edges)):
    MAX = max(MAX, max(edges[i])) 

# Actualizamos la cantidad de nodos y el maximo a partir de los datos
# obtenidos del archivo txt
nodos = MAX
MAX += 2

# Declaramos un arreglo en 0's para obtener los vertices
vert = [0] * MAX

# Generamos una matriz cuadrada para almacenar la informacion del grafo
graph = [[0 for i in range(MAX)] for j in range(MAX)]


# Funcion que nos permite revisar si, dado un arreglo de
# vertices estos son clique o no
def esClique(b):
	for i in range(1, b): 
		for j in range(i + 1, b):
			if (graph[vert[i]][vert[j]] == 0):
				return False
	return True

# Funcion para encontrar el numero
# maximo de los cliques
def maxCliques(i, l):
	numMaximo = 0
	for j in range(i + 1, nodos + 1):
		vert[l] = j
		if (esClique(l + 1)):
			numMaximo = max(numMaximo, l);#print("L: "+str(l))

			numMaximo = max(numMaximo, maxCliques(j, l + 1))
	return numMaximo
	
# Organizamos el grafo a partir de los datos obtenidos en el txt
for i in range(size): 
    graph[edges[i][0]][edges[i][1]] = 1
    graph[edges[i][1]][edges[i][0]] = 1

# Imprimimos el numero maximo de clique
print(maxCliques(0, 1))
