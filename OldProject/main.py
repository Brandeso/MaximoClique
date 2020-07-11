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

# Declaramos un arreglo en 0's para obtener el grado de los vertices
degree = [0] * MAX

# Funcion que nos permite revisar si, dado un arreglo de
# vertices estos son clique o no
def esClique(b): 

	# Run a loop for all set of edges 
	for i in range(1, b): 
		for j in range(i + 1, b): 

			# If any edge is missing 
			if (graph[vert[i]][vert[j]] == 0): 
				return False
	
	return True

# Funcion para encontrar el numero
# maximo de los cliques
def maxCliques(i, l): 

	# Tamanio maximo del clique
	numMaximo = 0

	# Revisamos si a partir del i+1
	# algun vertice puede ser insertado
	for j in range(i + 1, nodos + 1):

		# Aniadimos el vertice a la variable vert
		vert[l] = j
		print(vert)

		# Si el grafo no es un clique de tamanio k
		# entonces no puede ser un clique de tamanio k+1
		if (esClique(l + 1)): 

			# Actualizamos el numero maximo de clique
			numMaximo = max(numMaximo, l)

			# Revisamos si se puede aniadir otro 'edge'
			numMaximo = max(numMaximo, maxCliques(j, l + 1))
		
	return numMaximo
	
# Organizamos el grafo a partir de los datos obtenidos en el txt
for i in range(size): 
    graph[edges[i][0]][edges[i][1]] = 1
    graph[edges[i][1]][edges[i][0]] = 1 
    degree[edges[i][0]] += 1 
    degree[edges[i][1]] += 1 

# Imprimimos el numero maximo de clique
print(maxCliques(0, 1))
print(degree)
