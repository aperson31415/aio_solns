l, x, y = [int(input()) for _ in range(3)]
 
output = min(x+y, (2*l)-x-y)
 
print(output)
