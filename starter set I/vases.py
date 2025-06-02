n = int(input())
 
if n < 6: output = [0, 0, 0]
else: output = [1, 2, n-3]
 
print(' '.join(map(str, output)))
