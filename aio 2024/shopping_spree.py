N, K = map(int, input().split())
C = list(map(int, input().split()))
 
discounted = sum(C[:K])
other = sum(C[K+1:N-K:2])
 
print(discounted+other)
