#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
  int n; cin >> n;
  vector<int> v(n);
  for(int i = 0; i < n; i++) cin >> v[i];

  vector<int> chains;
  
  int currlen = 0;
  for(int i = 0; i < n; i++) {
    if(v[i] == 10000) currlen++;
    if(v[i] == 0) {
      chains.push_back(currlen);
      currlen = 0;
    }
  }
  chains.push_back(currlen);

  // calc
  int res = 0;
  for(int i = 0; i < (int)chains.size(); i++) {
    if(chains[i] == 0) continue;

    int x = chains[i];
    if(x % 2 == 0) {
      res += (x/2) * (x/2 + 1);
    } else {
      res += (x/2) * (x/2 + 1) + (x+1)/2;
    }
  }

  cout << res;
}
