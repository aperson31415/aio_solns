K = int(input())
I = input()
 
x = 0
y = 0
for i in I:
    if i == 'N': y += 1
    elif i == 'E': x += 1
    elif i == 'S': y -= 1
    elif i == 'W': x -= 1
 
print(abs(x)+abs(y))
