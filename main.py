# Python3 implementation of the approach 
MAX = 7
nodos = 0

# Stores the vertices
vert = [0] * MAX

# graph 
graph = [[0 for i in range(MAX)] for j in range(MAX)]

# Degree of the vert 
degree = [0] * MAX

# Function to check if the given set of 
# vert in vert array is a clique or not 
def esClique(b): 

	# Run a loop for all set of edges 
	for i in range(1, b): 
		for j in range(i + 1, b): 

			# If any edge is missing 
			if (graph[vert[i]][vert[j]] == 0): 
				return False
	
	return True

# Function to find all the sizes 
# of maximal cliques 
def maxCliques(i, l): 

	# Maximal clique size 
	noMaximo = 0

	# Check if any vert from i+1 
	# can be inserted 
	for j in range(i + 1, nodos + 1):

		# Add the vertex to vert 
		vert[l] = j

		# If the graph is not a clique of size k then 
		# it cannot be a clique by adding another edge 
		if (esClique(l + 1)): 

			# Update max 
			noMaximo = max(noMaximo, l)

			# Check if another edge can be added 
			noMaximo = max(noMaximo, maxCliques(j, l + 1))
		
	return noMaximo
	
# Driver code 
with open("nodos.txt", "r") as f:
	edges=[[int((num)) for num in line.split(',')] for line in f]
print(edges)
 
size = len(edges)
nodos = 5

for i in range(size): 
    graph[edges[i][0]][edges[i][1]] = 1
    graph[edges[i][1]][edges[i][0]] = 1 
    degree[edges[i][0]] += 1 
    degree[edges[i][1]] += 1 
for i in range(MAX):
    print(graph[i])

print(maxCliques(0, 1)) 
# This code is contributed by PrinciRaj1992 
