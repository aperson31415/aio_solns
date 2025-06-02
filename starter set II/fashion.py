t = int(input())
 
current = t
notes = 0
for i in [100,20,5,1]:
    j = current//i
    notes += j
    current -= j*i
 
print(notes)
