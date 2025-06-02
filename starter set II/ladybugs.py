N = int(input())
F = [int(input()) for _ in range(N)]
 
output = max(F)-min(F)+1
 
print(output)
