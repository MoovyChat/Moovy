import { Arg, Mutation, Resolver } from 'type-graphql';

import { decrypt, encrypt } from '../helpers';

@Resolver()
export class StripeResolver {
  @Mutation(() => String, { nullable: true })
  async decryptData(@Arg('iv') iv: string, @Arg('data') data: string) {
    const text = decrypt({ iv: iv, encryptedData: data });
    return text;
  }

  @Mutation(() => String, { nullable: true })
  async createCharge(@Arg('userId') userId: string): Promise<string | null> {
    if (!userId) return null;
    const encryptedSuccess = encrypt(`${userId}?success=true`);
    const encryptedFailure = encrypt(`${userId}?canceled=true`);
    const stripe = require('stripe')(
      'sk_test_51MQFmTEsPKCBDAQ0LbIutFuiGp4JxOjKzwlibYANLtZ9rmFqGDgSpU9oWgClUChyKwqtMvbSILchDxwKIiFjLHEj00oDjian3i'
    );
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1MQGU7EsPKCBDAQ0GQwPcrLC',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CORS_ORIGIN}/premium/?iv=${encryptedSuccess.iv}&&data=${encryptedSuccess.encryptedData}`,
      cancel_url: `${process.env.CORS_ORIGIN}/premium/?iv=${encryptedFailure.iv}&&data=${encryptedFailure.encryptedData}`,
    });
    return session.url as string;
  }
}
