original_fruits = int(input())
 
pattern = [2, 4, 8, 5, 10, 9, 7, 3, 6, 1]
remainder = original_fruits % 11
index = pattern.index(remainder)
 
doubles = 9 - index
end_fruits = original_fruits * (2 ** doubles)

print(f'{doubles} {end_fruits}')

# Sorry that its confusing, I fogrot what this was actually about did a lng time ago
