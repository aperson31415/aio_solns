rawinput = open('encyin.txt', 'r').readlines()
n, q = map(int, input())
p = [int(input()) for _ in range(n)]
x = [int(input()) for _ in range(q)]
 
output = []
 
for i in x:
    output.append(p[i-1])

print('\n'.join(map(str, output)))
