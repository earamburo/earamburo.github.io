export const python_code_block = `
import re
import json
import asyncio

# Get the custom input/print functions from globals
custom_input = globals()['custom_input']
custom_print = globals()['custom_print']

# Override built-in input and print
def input(prompt=''):
    result = asyncio.ensure_future(custom_input(prompt))
    return asyncio.get_event_loop().run_until_complete(result)

def print(*args, **kwargs):
    text = ' '.join(str(arg) for arg in args)
    custom_print(text)

def display_title():  
    print('Welcome to my game!')

def enter_credentials(): 
    username = input('Please enter your username\\n')
    if re.match(r'^[a-zA-Z0-9]+$', username):
        print('Credentials accepted!\\n')
        print('Game is loading...\\n')
        game_rules(username)
        return username
    else: 
        print('Invalid credentials! Try again!')
        return enter_credentials()
        
def game_rules(username):
    print("=" * 50)
    print("Welcome", username, '\\n')
    print("=" * 50)

def display_game_title():
    print("""
    ████████╗██╗  ██╗███████╗    ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗
    ╚══██╔══╝██║  ██║██╔════╝    ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝
       ██║   ███████║█████╗      ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝ 
       ██║   ██╔══██║██╔══╝      ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗ 
       ██║   ██║  ██║███████╗    ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗
       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
    
                    Wake up, Neo...
                    The Matrix has you...
                    Follow the white rabbit.
    """)
    print("=" * 80)    

def begin_game(username): 
    play = input('Would you like to begin a game? y/n\\n')
    if re.fullmatch(r'^[y]$', play):
        return story_mode(username)
    else: 
        print('Fine then! Goodbye!')
        return None

def story_mode(username):
    display_game_title()
    print()
    print(username, ', you have a choice...\\n')
    print("\\nYou find yourself in a dimly lit room.\\n")
    print("A mysterious figure approaches you with two pills:")
    print("RED PILL  - Learn the truth, no matter how harsh")
    print("BLUE PILL - Stay in blissful ignorance")
    
    while True:
        choice = input("Which pill? (red/blue): ").lower().strip()
        if choice == 'red':
            return choice
        elif choice == 'blue':
            return choice
        else: 
            print('Invalid response')
        
def pill_path(color, name, decisions):
    if color == 'red':
        print()
        print("\\nYou wake up in a strange pod filled with liquid...")
        print("Cables disconnect from your body as you're pulled free.")
        print("A bald man in sunglasses greets you: 'Welcome to reality.'")
        title, mission, outcome = red_training_paths()
        decisions.append(f"Chose {color} pill")
        decisions.append(f"Selected job: {title}")
        store_player_data(color, name, title, mission, outcome, decisions)
        print("Stand by and wait for our orders to complete your training...Goodbye")
        print("\\n--- GAME OVER ---")
        print("Click 'Restart' to play again!")
    elif color == 'blue':
        print("\\nYou wake up in your bed, sunlight streaming through the window.")
        print("Was it all just a dream?")
        title, mission, outcome = blue_training_paths()
        decisions.append(f"Chose {color} pill")
        decisions.append(f"Selected job: {title}")
        store_player_data(color, name, title, mission, outcome, decisions)
        print("You won! Thank you for playing!")
        print("\\n--- GAME OVER ---")
        print("Click 'Restart' to play again!")
                
def red_training_paths():
    print("=" * 60)
    print("Morpheus: 'We need to prepare you. Choose your training:'")
    print()
    print("1. COMBAT - Learn martial arts and weapons (high risk, high reward)")
    print("2. HACKING - Master the code of the Matrix (stealth and strategy)")
    print("3. PILOT - Fly hovercraft and navigate the real world (support role)")
    print()
    
    while True: 
        training_selected = input("Choose your path (1/2/3): ").strip()
        if training_selected in ['1', '2', '3']:
            break
        print("Invalid choice! Enter 1, 2, or 3")
    
    training_details = {
        '1': ('COMBAT SPECIALIST', 'You become a warrior, ready to fight the machines.'),
        '2': ('ELITE HACKER', 'You can bend the Matrix to your will.'),
        '3': ('EXPERT PILOT', 'You master navigation through the dangerous real world.')
    }
    title, mission = training_details[training_selected]
    outcome = "Joined the resistance"
    return title, mission, outcome

def blue_training_paths():
    print("=" * 60)
    print('Your alarm goes off. Time to get my day started!')
    print()    
    print("WORK - Go to your office job (responsible)")
    print("REST - Stay home and relax (fun)")
    print()
    
    while True: 
        schedule_selected = input("What's on your schedule for today? (Work/Rest): ").lower().strip()
        if schedule_selected in ['work', 'rest']:
            break
        print("Invalid choice! Enter work or rest")
    
    schedule_details = {
        'work': ('Employee', 'You head to the office for another day of meetings.'),
        'rest': ('Gamer', 'You stay home and enjoy a relaxing day off.')
    }
    title, mission = schedule_details[schedule_selected]
    outcome = "Stayed in the Matrix"
    return title, mission, outcome
    
def store_player_data(color, name, job, mission, outcome, decisions):
    player_data = {
        "color": color,
        "name": name,
        "job": job,
        "mission": mission,
        "outcome": outcome,
        "decisions": decisions
    }
    # In browser, we'll just print the data instead of saving to file
    print("\\n" + "=" * 50)
    print("PLAYER DATA SUMMARY")
    print("=" * 50)
    print(json.dumps(player_data, indent=2))
   
def main(): 
    display_title()
    #Insert bottom code

# Run the game
main()
`
// player_name = enter_credentials()
    // decisions = [] 
    // pill = begin_game(player_name)
    // if pill:
    //     pill_path(pill, player_name, decisions)