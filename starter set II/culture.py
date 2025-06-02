n = int(input())
 
i = 0
N = n
while N%2 == 0:
    i += 1
    N /= 2

print(f'{n} {i}')
