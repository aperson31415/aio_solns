n, d = map(int, input().split())
 
b = n % d # The numerator part (proper fraction)
a = int((n-b)/d) # The whole part


if b == 0:
    output_file.write(f'{a}')
else:
    output_file.write(f'{a} {b}/{d}')

print(a if b == 0 else f'{a} {b}/{d}') # a b/d if b != 0, or just a if b == 0
