#include <bits/stdc++.h>
using namespace std;

int main() {
  int n; cin >> n;
  vector<int> v(n);
  for(int i = 0; i < n; i++) cin >> v[i];
  int x = v[n-1];

  bool good = true;
  for(int i = 0; i < n; i++) {
    if(v[i] != 10000 and v[i] != 0) good = false;
  }

  if(good) {
    vector<int> chains;
  int currlen = 0;
  for(int i = 0; i < n; i++) {
    if(v[i] == 10000) currlen++;
    else {
      chains.push_back(currlen);
      currlen = 0;
    }
  }

  int res = currlen*(currlen+1)/2;

  for(int x : chains) {
    if(x % 2 == 0) {
      res += (x/2) * ((x/2) + 1);
    } else {
      res += ((x/2) * ((x/2) + 1)) + ((x+1)/2);
    }
  }

  cout << res;
  return 0;
  }

  int hill = (n + x + 1)/2;
  int res = 0;
  if(x % 2 == 0) {
    res -= hill*2;
  }
  
  res += hill*(hill+1)/2; // left side
  res += (hill*(hill+1)/2) - x*(x-1)/2;// right side
                                       
  cout << res;
}
