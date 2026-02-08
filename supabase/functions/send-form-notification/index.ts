import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface FormNotificationRequest {
  formType: "contact" | "reservation";
  name: string;
  email: string;
  phone: string;
  course?: string;
  message?: string;
  courseName?: string;
}

const RECIPIENT_EMAIL = "Vikasparekh@live.com";

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: FormNotificationRequest = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.formType) {
      throw new Error("Missing required fields: name, email, phone, and formType are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format");
    }

    // Validate phone (basic validation - at least 10 digits)
    const phoneDigits = data.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      throw new Error("Invalid phone number");
    }

    let subject: string;
    let htmlContent: string;

    if (data.formType === "contact") {
      subject = `📩 New Contact Form Submission from ${data.name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057; width: 140px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                  <a href="mailto:${data.email}" style="color: #007bff;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                  <a href="tel:${data.phone}" style="color: #007bff;">${data.phone}</a>
                </td>
              </tr>
              ${data.course ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Course Interest:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${data.course}</td>
              </tr>
              ` : ""}
              ${data.message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #495057; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #212529;">${data.message}</td>
              </tr>
              ` : ""}
            </table>
            <div style="margin-top: 30px; padding: 15px; background: #e8f4f8; border-radius: 8px; border-left: 4px solid #17a2b8;">
              <p style="margin: 0; color: #495057; font-size: 14px;">
                📞 Please respond to this inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      `;
    } else {
      subject = `🎓 New Course Enrollment Request from ${data.name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #28a745 0%, #34ce57 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🎓 New Enrollment Request</h1>
            ${data.courseName ? `<p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">${data.courseName}</p>` : ""}
          </div>
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057; width: 140px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                  <a href="mailto:${data.email}" style="color: #007bff;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                  <a href="tel:${data.phone}" style="color: #007bff;">${data.phone}</a>
                </td>
              </tr>
              ${data.courseName ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Course:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529; font-weight: 600;">${data.courseName}</td>
              </tr>
              ` : ""}
              ${data.message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #495057; vertical-align: top;">Questions:</td>
                <td style="padding: 12px 0; color: #212529;">${data.message}</td>
              </tr>
              ` : ""}
            </table>
            <div style="margin-top: 30px; padding: 15px; background: #d4edda; border-radius: 8px; border-left: 4px solid #28a745;">
              <p style="margin: 0; color: #155724; font-size: 14px;">
                ⏰ This student is waiting for a callback within 24 hours to confirm enrollment!
              </p>
            </div>
          </div>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Surat DMS <notifications@resend.dev>",
      to: [RECIPIENT_EMAIL],
      subject: subject,
      html: htmlContent,
      reply_to: data.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-form-notification function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
