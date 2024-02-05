<?php

namespace App\Enums;

enum UserRole: string {
    case ADMIN = 'admin';
    case PARTICIPANT = 'participant';
    case LECTURER = 'lecturer';
}