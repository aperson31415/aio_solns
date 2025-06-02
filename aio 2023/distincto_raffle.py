 N, K = map(int, input().split())
I = map(int, input().split())
 
frequencies = {}
for i in I:
    if i in frequencies: frequencies[i] += 1
    else: frequencies[i] = 1
 
leftovers = []
for i in frequencies:
    if frequencies[i] == 1: leftovers.append(i)
 
if leftovers != []: output = min(leftovers)
else: output = -1
 
print(output)
