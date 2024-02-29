<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RejectProposal extends Mailable
{
    use Queueable, SerializesModels;

    private $name, $proposal_title, $note;

    /**
     * Create a new message instance.
     */
    public function __construct($name, $proposal_title, $note)
    {
        $this->name = $name;
        $this->proposal_title = $proposal_title;
        $this->note = $note;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Yuk, Semangat! Proposal PKM Kalian Masih Bisa Direvisi! 💪',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.reject-proposal',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
