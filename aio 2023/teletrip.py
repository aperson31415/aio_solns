N = int(input())
I = input()
 
pos = 0
visited = {0}
Visited = 1
for i in I:
    if i == 'L': pos -= 1
    elif i == 'R': pos += 1
    elif i == 'T': pos = 0
    visited.add(pos)
 
print(len(visited))
