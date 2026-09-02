// sub1
#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
  int n, k; cin >> n >> k;
  vector<int> r(n), c(n);
  for(int i = 0; i < n; i++) cin >> r[i];
  for(int i = 0; i < n; i++) cin >> c[i];

  int rsum = 0, csum = 0;
  for(int i = 0; i < n; i++) {
    rsum += r[i];
    csum += c[i];
  }

  if(csum != rsum) {
    cout << "NO";
    return 0;
  }

  vector<vector<int>> matrix(n, vector<int>(n));

  int upto = 0;
  for(int i = 0; i < n; i++) {
    for(int j = 0; j < c[i]; j++) {
      matrix[upto][i] = 1;
      upto++;
    }
  }

  cout << "YES\n";

  for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
      cout << matrix[i][j] << ' ';
    }
    cout << '\n';
  }
}
