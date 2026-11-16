import crypto from 'crypto';
export async function initializePayment({provider,email,amount,reference,callbackUrl}) {
  if(provider==='paystack'){
    const r=await fetch('https://api.paystack.co/transaction/initialize',{method:'POST',headers:{Authorization:`Bearer ${process.env.PAYSTACK_SECRET_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({email,amount:Math.round(amount*100),reference,callback_url:callbackUrl})});
    const data=await r.json();if(!r.ok||!data.status)throw new Error(data.message||'Paystack initialization failed');return {url:data.data.authorization_url};
  }
  if(provider==='flutterwave'){
    const r=await fetch('https://api.flutterwave.com/v3/payments',{method:'POST',headers:{Authorization:`Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({tx_ref:reference,amount,currency:'NGN',redirect_url:callbackUrl,customer:{email},customizations:{title:'UpperRoom Soar Summit',description:'Event ticket payment'}})});
    const data=await r.json();if(!r.ok||data.status!=='success')throw new Error(data.message||'Flutterwave initialization failed');return {url:data.data.link};
  }
  throw new Error('Unsupported payment provider');
}
export async function verifyProviderPayment(provider,reference,transactionId){
  if(provider==='paystack'){
    const r=await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,{headers:{Authorization:`Bearer ${process.env.PAYSTACK_SECRET_KEY}`}});
    const d=await r.json();if(!r.ok||!d.status)throw new Error('Could not verify Paystack transaction');
    return {paid:d.data.status==='success',amount:d.data.amount/100,reference:d.data.reference,transactionId:String(d.data.id)};
  }
  if(!transactionId)throw new Error('Flutterwave transaction ID is required for verification.');
  const r=await fetch(`https://api.flutterwave.com/v3/transactions/${encodeURIComponent(transactionId)}/verify`,{headers:{Authorization:`Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`}});
  const d=await r.json();if(!r.ok||d.status!=='success')throw new Error('Could not verify Flutterwave transaction');
  return {paid:d.data.status==='successful'&&d.data.currency==='NGN',amount:Number(d.data.amount),reference:d.data.tx_ref,transactionId:String(d.data.id)};
}
export function validPaystackSignature(raw,signature){const hash=crypto.createHmac('sha512',process.env.PAYSTACK_SECRET_KEY).update(raw).digest('hex');return hash===signature;}
export function validFlutterwaveSignature(signature){return Boolean(signature)&&signature===process.env.FLUTTERWAVE_SECRET_HASH;}
