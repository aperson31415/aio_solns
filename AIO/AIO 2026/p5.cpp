#include <bits/stdc++.h>
using namespace std;

int main() {
  int n, k; cin >> n >> k;
  vector<int> a(n);
  for(int i = 0; i < n; i++) cin >> a[i];

  int med = (n-1)/2;
  int curr = k;
  int res = -1;

  if(n == 1) {
    cout << a[0] + k;
    return 0;
  }

  for(int i = med; i < n - 1; i++) {
    if(a[i + 1] == a[i]) continue;

    if(curr >= (i - med + 1) * (a[i+1] - a[i])) {
      curr -= (i - med + 1) * (a[i+1] - a[i]);
    } else {
      // final one
      res = (curr / (i - med + 1)) + a[i];
      curr = 0;
      break;
    }
  }

  if(curr > 0) {
    res = a[n-1] + curr/(n-med);
  }

  cout << res;
}
