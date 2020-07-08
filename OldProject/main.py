# Implementación del algoritmo recursivo de la búsqueda del máximo cliqué
# Declaramos los nodos y el máximo
MAX = 0
nodos = 0

# Obtenemos los datos desde el txt
with open("nodos.txt", "r") as f:
	edges=[[int((num)) for num in line.split(',')] for line in f]
 
size = len(edges)

for i in range(len(edges)):
    MAX = max(MAX, max(edges[i])) 

# Actualizamos la cantidad de nodos y el máximo a partir de los datos
# obtenidos del archivo txt
nodos = MAX
MAX += 2

# Declaramos un arreglo en 0's para obtener los vértices
vert = [0] * MAX

# Generamos una mátriz cuadrada para almacenar la información del grafo
graph = [[0 for i in range(MAX)] for j in range(MAX)]

# Declaramos un arreglo en 0's para obtener el grado de los vertices
degree = [0] * MAX

# Función que nos permite revisar si, dado un arreglo de
# vertices estos son clique o no
def esClique(b): 

	# Run a loop for all set of edges 
	for i in range(1, b): 
		for j in range(i + 1, b): 

			# If any edge is missing 
			if (graph[vert[i]][vert[j]] == 0): 
				return False
	
	return True

# Funcion para encontrar el número  
# máximo de los cliques 
def maxCliques(i, l): 

	# Tamaño máximo del clique
	numMaximo = 0

	# Revisamos si a partir del i+1
	# algún vértice puede ser insertado
	for j in range(i + 1, nodos + 1):

		# Añádimo el vértice a la variable vert
		vert[l] = j

		# Si el grafo no es un clique de tamaño k 
		# entonces no puede ser un clique de tamaño k+1
		if (esClique(l + 1)): 

			# Actualizamos el número máximo de clique
			numMaximo = max(numMaximo, l)

			# Revisamos si se puede añadir otro 'edge'
			numMaximo = max(numMaximo, maxCliques(j, l + 1))
		
	return numMaximo
	
# Organizamos el grafo a partir de los datos obtenidos en el txt
for i in range(size): 
    graph[edges[i][0]][edges[i][1]] = 1
    graph[edges[i][1]][edges[i][0]] = 1 
    degree[edges[i][0]] += 1 
    degree[edges[i][1]] += 1 

for i in range(MAX):
    print(graph[i])

# Imprimimos el número máximo de clique
print(maxCliques(0, 1)) 
# This code is contributed by PrinciRaj1992 
