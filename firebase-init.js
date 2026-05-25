/* ========================================
   firebase-init.js  -  小林モータース ポータル
   ----------------------------------------
   CarFlow と同じ Firebase プロジェクト(carflow-9d500)に相乗り。
   認証(Google) と Firestore を共用。ポータルのデータは専用の保管場所に保存し、
   本番 CarFlow のデータには触らない。
   ======================================== */
(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyBmhI5SzkmPvZUiuTn_ttCZ4tUikKv_iHI",
    authDomain: "carflow-9d500.firebaseapp.com",
    projectId: "carflow-9d500",
    storageBucket: "carflow-9d500.firebasestorage.app",
    messagingSenderId: "235121541987",
    appId: "1:235121541987:web:8f96dfadc23fe1de7f4956"
  };
  if (typeof firebase === 'undefined') {
    console.error('[firebase-init] Firebase SDK が読み込まれていません');
    return;
  }
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  db.enablePersistence({ synchronizeTabs: true }).catch(function () {});
  window.fb = {
    auth: auth,
    db: db,
    config: firebaseConfig,
    serverTimestamp: function () { return firebase.firestore.FieldValue.serverTimestamp(); },
    FieldValue: firebase.firestore.FieldValue,
    currentUser: null,
    currentStaff: null,
  };
  console.log('[firebase-init] OK', firebaseConfig.projectId);
})();
