rows, seatsPerRow = map(int, input().split())
people = int(input())
if rows * seatsPerRow >= people:
    sitting = people
    standing = 0
else:
    sitting = rows * seatsPerRow
    standing = people - sitting

print(f'{sitting} {standing}')
