w, h = map(int, input().split())
 
score = (w*h) - ((w*h) % 2)
 
print(score)
