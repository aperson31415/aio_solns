from math import ceil

n, k = map(int, rawinput.input())
 
output = ceil( (n-k)/(k+1) )
 
print(output)
