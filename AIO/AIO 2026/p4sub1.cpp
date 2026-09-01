// sub1
#include <bits/stdc++.h>
using namespace std;

int ceildiv(int a, int b) {
  return a/b + (a%b != 0);
}

int main() {
  int n; cin >> n;
  vector<int> v(n);
  for(int i = 0; i < n; i++) cin >> v[i];
  v[n-1] = min(v[n-1], n);
  int x = ceildiv(n+v[n-1]-1, 2);
  int res = x*(x+1)/2;
  res += x*(x+1)/2 - v[n-1]*(v[n-1]-1)/2;

  if(n % 2 == 1) res -= x;

  cout << res;
}
