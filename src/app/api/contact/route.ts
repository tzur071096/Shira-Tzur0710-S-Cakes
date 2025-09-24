import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';
const TO_EMAIL = process.env.TO_EMAIL || 'tzur071096@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to Shira
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Cake Order Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f8b5c1, #fce4e8); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #2d2d2d; margin: 0; text-align: center;">🍰 New Cake Order Request</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #f8b5c1; border-top: none;">
            <h2 style="color: #2d2d2d; margin-top: 0;">Customer Information</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #2d2d2d;">Name:</strong>
              <p style="margin: 5px 0; color: #666666;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #2d2d2d;">Phone:</strong>
              <p style="margin: 5px 0; color: #666666;">${phone}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #2d2d2d;">Email:</strong>
              <p style="margin: 5px 0; color: #666666;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #2d2d2d;">Cake Details:</strong>
              <p style="margin: 5px 0; color: #666666; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 30px;">
              <h3 style="color: #2d2d2d; margin-top: 0;">Next Steps</h3>
              <p style="color: #666666; margin: 0;">Please contact the customer within 24 hours to discuss their cake requirements and provide a quote.</p>
            </div>
          </div>
          
          <div style="background: #f8b5c1; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #2d2d2d; margin: 0; font-size: 14px;">
              This order was submitted through your website at shirascakes.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Thank you for your cake order request! 🍰',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f8b5c1, #fce4e8); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #2d2d2d; margin: 0; text-align: center;">Thank You, ${name}! 🍰</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #f8b5c1; border-top: none;">
            <p style="color: #666666; font-size: 16px; line-height: 1.6;">
              Hi ${name}! Thank you so much for your cake order request. I'm thrilled that you're considering me for your special occasion!
            </p>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.6;">
              I've received your message about your cake vision and I'll get back to you within 24 hours to discuss the details and provide you with a quote.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d2d2d; margin-top: 0;">What happens next?</h3>
              <ul style="color: #666666; padding-left: 20px;">
                <li>I'll review your requirements and get back to you within 24 hours</li>
                <li>We'll discuss flavors, design, and timeline</li>
                <li>I'll provide you with a detailed quote</li>
                <li>Once approved, I'll start creating your perfect cake!</li>
              </ul>
            </div>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to check out my portfolio on Instagram <a href="https://www.instagram.com/shirascakes/" style="color: #f8b5c1;">@shirascakes</a> or Facebook <a href="https://www.facebook.com/cakesbyshira" style="color: #f8b5c1;">Cakes by Shira</a> to see more of my work!
            </p>
          </div>
          
          <div style="background: #f8b5c1; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #2d2d2d; margin: 0; font-size: 14px;">
              <strong>Shira Tzur</strong><br>
              Custom Cake Designer<br>
              📞 +1 214.677.6273<br>
              📍 Plano, TX
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Order request sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
