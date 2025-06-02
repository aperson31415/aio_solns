N = int(input())
A = [int(input()) for _ in range(N)]
 
B = {}
for i in A:
    if not (i in B):
        B[i] = 0
    B[i] += 1
 
for i in B:
    if B[i] % i == 0:
        c = "YES"
    else:
        c = "NO"
        break
 
print(c)
