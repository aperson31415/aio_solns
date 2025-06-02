N = int(input())
H = [int(input()) for _ in range(N)]
 
maxx = 0
minx = 100001
maxy = 0
miny = 100001
 
for i in H:
    x, y = map(int, i.split())
    if x > maxx: maxx = x
    if x < minx: minx = x
    if y > maxy: maxy = y
    if y < miny: miny = y
 
print((maxx-minx)*(maxy-miny))
