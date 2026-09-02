#pragma GCC optimize("O3")
#include <bits/stdc++.h>
#pragma GCC target ("avx,avx2,bmi,bmi2,lzcnt,popcnt,sse4,fma")
using namespace std;

int main() {
  int n, k; cin >> n >> k;
  vector<int> a(n);
  for(int i = 0; i < n; i++) cin >> a[i];

  bool all0 = true;
  for(int i = 0; i < n; i++) {
    if(a[i] != 0) {all0 = false; continue;}
  }

  if(all0) {
    int am = (n+1)/2;
    cout << k/am;
    return 0;
  }

  multiset<int> good;
  for(int i = (n-1)/2; i < n; i++) good.insert(a[i]);

  for(int i = 0; i < k; i++) {
    int val = *good.begin();
    good.erase(good.begin());
    good.insert(val + 1);
  }

  cout << *good.begin();
}
