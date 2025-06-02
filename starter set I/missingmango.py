ax, bx, ad, bd = map(int, input().split())
 
if bx+bd == ax-ad or bx+bd == ax+ad:
    distance = bx+bd
elif bx-bd == ax-ad or bx-bd == ax+ad:
    distance = bx-bd
else:
    distance = 'PooPoo'
 
print(str(distance))
